# Mock Portfolio
## A Portfolio Tracking Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Link](https://portfolio-simulator.herokuapp.com)

![mockportfolio](https://user-images.githubusercontent.com/1903468/66330405-2eb0bc00-e8e5-11e9-9184-2d7bce20e1f9.png)

## Technologies 
+ ### Frontend Components: Vanilla JavaScript and D3  
+ ### Frontend State: Vanilla Javascript  

## Features
+   Asyncronious API Call Handling 

```javascript
  export async function fetchAllHist(syms) {
    try {
      const history = await Promise.all(
          syms.map(async (sym) => await (await
          fetch(`API URL`)).json())
      );
      const result = {};
      syms.forEach((sym, i) => {
        result[sym.sym] = history[i];
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  };

````

+  Parse Multiple API Queries Into 1 dataset;  

````javascript
  export const combineStockHistories = (histories) => (
    Object.values(histories).reduce((history) => (
      history.map(((quoteObj) => {
        Object.entries(quoteObj).forEach(([key, val]) => {
          if (key !== 'date') {
            quoteObj[key] = (quoteObj[key] || 0) + val;
          }
        });
        return quoteObj;
      }))
    ))
  );
````
+  Draw a pie chart using d3 that automatically updates.  

![Piechart](https://user-images.githubusercontent.com/1903468/66331032-7d128a80-e8e6-11e9-8979-b2c049f65f20.gif)

+  Line using combined data with hover effect.  

![linechart](https://user-images.githubusercontent.com/1903468/66331147-bba84500-e8e6-11e9-8c0a-821e5a338546.gif)
