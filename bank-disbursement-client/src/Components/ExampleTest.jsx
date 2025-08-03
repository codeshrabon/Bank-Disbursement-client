import React from "react";

  const user ={
        name: 'Lady ',
        imageUrl: 'bank-disbursement-client\src\Image\lady.png' ,
        imageSize: 90,

    }
function ExampleTest (){

    return (
    <div className="container text-center">
        {/* <div className="row">
          <div className="col">column 1 of 12</div>
          <div className="col">column 2 0f 12</div>
          <div className="col">column 3 of 12</div>
          <div className="col">column 4 of 12</div>
          <div className="col">column 5 of 12</div>
          <div className="col">column 6 of 12</div>
          <div className="col">column 7 of 12</div>
          <div className="col">column 8 of 12</div>
          <div className="col">column 9 of 12</div>
          <div className="col">column 10 of 12</div>
          <div className="col">column 11 of 12</div>
          <div className="col">column 12 of 12</div>
        </div> */}
        <div className="container text-center">
            <div className="row">
            <div className="col">1 of 2</div>
            <div className="col">2 of 2</div>
            </div>
            <div className="row" style={{backgroundColor:"pink"}}>
            <div className="col" style={{borderBlock:"3px"}}>1 of 3</div>
            <div className="col">2 of 3</div>
            <div className="col">3 of 3</div>
            </div>
        </div>
        <div className="row">
            <div className="col">1 of 4</div>
            <div className="col">2 of 4</div>
            <div className="col">3 of 4</div>
            <div className="col">4 of 4</div>

        </div>
        <div className="container text center">
            <div className="row">
                <div className="col col-lg-2">
                    ol col-lg-2
                </div>
                <div className="col col-md-2">
                    col col-md-4
                </div>
                <div className="col col-md-3">
                    col col-md-4
                </div>
                <div className="col col-md-5">
                    col col-md-6
                </div>

            </div>
        </div>
        
        </div>
        

        

    );
    



}

export default ExampleTest;