import "./Center.css";
import CenterItem from "./CenterItem/CenterItem";
import centerdata from "../centerdata.json";
export function Center() {
  console.log(centerdata);
  return (
    <div className="center">
        {
            centerdata.map((item ,index)=>{
                return<CenterItem key={index} item={item}/>
            })
        }
      
      {/* <CenterItem />
      <CenterItem />
      <CenterItem /> */}
      {/* <CenterItem/> */}

      {/* <div className="profile">
        <img src="profilepic1.png" alt="" />
        <div className="name">
          <h6>Lara Leones</h6>
        </div>
      </div> */}
    </div>
  );
}
