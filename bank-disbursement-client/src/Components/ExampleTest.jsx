import React from "react";

  const user ={
        name: 'Lady ',
        imageUrl: 'C:\WorkSpace\React\Disbursement-Report\bank-disbursement-client\src\Image\lady.png' ,
        imageSize: 90,

    }
function ExampleTest (){

    return(

        
        <div className="MyIntro">
            <div className="container">
                <div className="testing_avatar_image">
                    <>
                    <h1>{user.name}</h1>
                    <img 
                    className="avatar"
                    src={user.imageUrl} 
                    alt={'Photo of ' + user.name} 
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                    
                    />
                    </>

                </div>

            </div>
        </div>
        
    );



}

export default ExampleTest;