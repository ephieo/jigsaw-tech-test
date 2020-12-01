# Jigsaw Tech Test - Ephie Oyedoh 


# UPDATE 
I kept working on the tech test after the deadline so it's complete and refactored on the branch called : after-deadline-changes.
I also refactored the tests to use chai alongside tape and all tests now pass. 

# HOW TO USE :
- Clone the repo. 
- Make sure that you navigate into the recruitment folder. 
- Run `npm i` or `npm install` 
- Then run `npm run dev` or `npm run start`
- Click the link in the terminal that will open up the routes in your browser 
- you will find the main route containing all transactions on http://localhost:3000/insights/

## How it went ?

- I seemed to do okay with the category route but struggled with the cashflow route. 
- I spent a lot of time mainly trying to understand everything that I was doing. 
- I wish I had a little more time to keep working on the server but understanding every step took a little too much time.
- I'v e never used mocha and chai and wasn't sure about how to integrate tape alongside chai but I hope to look more into it. 


## What's completed ?
- the "/category" route works and sends back calculated data fetched from the given route. 
- the "/cashflow" route renders back a list of ordered dates but I struggled to filter the return data by dates whithout writing repeated code. 
- However while writing this readme I tried again and managed to render the calculated values on the "/cashflow" route.
<del> The "/cashflow/attempt1" route was my attempt at rendering the responses dependent on the date range given by the transaction dates.</del>
- The "/cashflow" route shows the transactions only ordered by days that money was spent. 
### Overall I enjoyed the opportunity to try out the tech test it was a challenge, but it was a challenge I enjoyed. 




