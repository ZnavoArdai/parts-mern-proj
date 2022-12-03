import Table from "../Table/Table";
import "./TableAndCircle.css";
const TableAndCircles = () => {

    
  return (
    <div className="showCaseContainer container-fluid mt-5 mb-5">
      <div className="ShowCase circleShowCase">
        <div className=" one">
          <div className="inside">

            <div className="circle">
<h2>200</h2>
            </div>
          </div>
        </div>

        <div className=" two">
          <div className="inside"></div>
        </div>
      </div>

      <div className="ShowCase three">
        <div className="inside tablhOLDER">
            <Table/>
        </div>
      </div>
    </div>
  );
};

export default TableAndCircles;
