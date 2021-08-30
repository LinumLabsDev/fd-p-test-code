import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import useStyles from "./navbarStyles";
import {
  LoginComponent,
  ListPodsComponent,
  OpenPodComponent,
} from "fd-t-p";
export interface Props {
 
}

function Navbar(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const [password, setPassword] = useState(null);
  const [pods, setPods]= useState(null);
  const [podName, setPodName] = useState(null);
  useEffect(()=>{
    if(pods){
    console.log({pods});
    }
    if(podName) {
      console.log(podName);
    }
  },[pods, podName]);

  return (
    <div className={classes.Navbar}>
      {password &&
       <div className={classes.buttonPill}>
          <ListPodsComponent setPod={setPods}></ListPodsComponent>
        </div>
      }
      {pods && 
      pods.map((pod) => {
        return (
          <div className={classes.buttonPill}
            onClick={() => {
              setPodName(pod)
            }}>
            <OpenPodComponent password={password} podName={pod}></OpenPodComponent>
            </div>

        )
      })}
      {!password && 
        <LoginComponent
          setUserPassword={setPassword}
        ></LoginComponent>
      }
    </div>
  );
}

export default React.memo(Navbar);
