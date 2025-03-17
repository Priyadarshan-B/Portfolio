import React from "react"
import './background.css'
function Background(){
return(
  <div className="area bg-[linear-gradient(140deg,#eceff7,#bccada,#c1cdde)] dark:bg-[linear-gradient(140deg,theme('colors.darkBackground'),#282c34,#363b49)]">
        <ul className="circles ">
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
          <li className="bg-circlelight dark:bg-circledark"></li>
        </ul>
      </div>
)
}
export default Background