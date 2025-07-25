import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const STORAGE_BUCKET = "portfolio";

// Path to assets folder
const assetsPath = path.join(__dirname, "../src/assets");

async function uploadFile(filePath, fileName) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(fileName, fileContent, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error(`Error uploading ${fileName}:`, error);
      return false;
    }

    console.log(`✅ Successfully uploaded: ${fileName}`);
    return true;
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error);
    return false;
  }
}

async function uploadAllAssets() {
  console.log("🚀 Starting asset upload to Supabase...");

  try {
    // Check if bucket exists, create if not
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets.some(
      (bucket) => bucket.name === STORAGE_BUCKET
    );

    if (!bucketExists) {
      console.log(`Creating bucket: ${STORAGE_BUCKET}`);
      const { error } = await supabase.storage.createBucket(STORAGE_BUCKET, {
        public: true,
      });
      if (error) {
        console.error("Error creating bucket:", error);
        return;
      }
    }

    // Read all files from assets directory
    const files = fs.readdirSync(assetsPath);
    const imageFiles = files.filter((file) =>
      /\.(png|jpg|jpeg|gif|svg|pdf)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} files to upload`);

    // Upload each file
    let successCount = 0;
    for (const file of imageFiles) {
      const filePath = path.join(assetsPath, file);
      const success = await uploadFile(filePath, file);
      if (success) successCount++;
    }

    console.log(
      `\n🎉 Upload complete! ${successCount}/${imageFiles.length} files uploaded successfully`
    );

    // Make bucket public
    const { error } = await supabase.storage.updateBucket(STORAGE_BUCKET, {
      public: true,
    });

    if (error) {
      console.warn("Warning: Could not make bucket public:", error);
    } else {
      console.log("✅ Bucket is now public");
    }
  } catch (error) {
    console.error("Error during upload:", error);
  }
}

uploadAllAssets();
