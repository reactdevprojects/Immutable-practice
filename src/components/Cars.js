import React from "react";


class Cars extends React.Component {
 state = {
    "id": "001",
    "type": "A",
    "value": "aaaaa",
    "data:": {},
    "path": ["001"],
    "children": [
        {
            "id": "003",
            "type": "A",
            "value": "aaaaa",
            "data:": {},
            "path": ["001", "003"],
            "children": [
                {
                    "id": "002",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "003", "002"],
                    "children": []
                },
            ]
        },
        {
            "id": "004",
            "type": "A",
            "value": "aaaaa",
            "data:": {},
            "path": ["001", "004"],
            "children": [
                {
                    "id": "005",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "004", "005"],
                    "children": []
                },{
                    "id": "005",
                    "type": "A",
                    "value": "aaaaa",
                    "data:": {},
                    "path": ["001", "004", "005"],
                    "children": [
                        {
                            "id": "002",
                            "type": "A",
                            "value": "aaaaa",
                            "data:": {},
                            "path": ["001", "004", "005", "002"],
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}

//use one setState function to update 'state.children[0].children[0].path[1]' from "003" into "004",

handleState = () => {
  const newState = {
    ...this.state,
    children: this.state.children.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          children: this.state.children[0].children.map((item, index) => {
            if (index === 0) {
              return {
                ...item,
                path: this.state.children[0].children[0].path.map(
                  (item, index) => {
                    if (index === 1) {
                      return "004";
                    } else {
                      return item;
                    }
                  }
                )
              };
            } else {
              return item;
            }
          })
        };
      } else if (index === 1) {
        return {
          ...item,
          children: this.state.children[1].children.map((item, index) => {
            if (index === 1) {
              return {
                ...item,
                children: this.state.children[1].children[1].children.map(
                  (item, index) => {
                    if (index === 0) {
                      return {
                        ...item,
                        path: this.state.children[1].children[1].children[0].path.map(
                          (item, index) => {
                            if (index === 2) {
                              return "006";
                            } else {
                              return item;
                            }
                          }
                        )
                      };
                    }
                  }
                )
              };
            } else {
              return item;
            }
          })
        };
      } else {
        return item;
      }
    })
  };
  this.setState(newState);
};

  // handleSellCar = (index, category) => {
  //   this.setState(prev=>{
  //     return {
  //       ...prev,
  //       carsData:{
  //         ...prev.carsData,
  //         cars:{
  //           ...prev.carsData.cars,
  //           [category]:[
  //             ...prev.carsData.cars[category].slice(0, index),
  //             {
  //               ...prev.carsData.cars[category][index],
  //               number: prev.carsData.cars[category][index].number - 1
  //             },
  //             ...prev.carsData.cars[category].slice(index+1)
  //           ]
  //           /* 
  //             prev.carsData.cars[category].map((item, innerIndex)=>{
  //               if(index === innerIndex){
  //                 return {
  //                   ...prev.carsData.cars[category][index],
  //                   number: prev.carsData.cars[category][index].number - 1
  //                 }
  //               }else{
  //                 return item;
  //               }
  //             })
  //           */
  //         },
  //         totalNumber: Object.keys(prev.carsData.cars).reduce((total, carModel) => {
  //         const amount = prev.carsData.cars[carModel].reduce(
  //         (carTotal, car) => carTotal + car.number,
  //          0
  //          );
  //         return total + amount;
  //           }, 0) - 1
  //       }
  //     }
  //   })
  // };

  render() {
    console.log(
      this.state.children[0].children[0].path[1],
      this.state.children[1].children[1].children[0].path[2]
    );
    return (
      <div className="cars">
        <header>
  
        </header>
        <div className="cars__container">
      

         <button onClick={()=>{this.handleState()}}>aa</button>
     
        </div>
      </div>
    );
  }
}

/* const cars = new Cars()
cars.handleSellCar

const obj1 = {

  func: cars.handleSellCar
}

obj1.func() */

export default Cars;
