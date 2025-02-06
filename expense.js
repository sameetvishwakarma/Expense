var my_balance_amt = document.getElementById('my_balance');
var income_amt = document.getElementById('income');
var expense_amt = document.getElementById('expense');
var input_amt = document.getElementById('amount');
var input_desc = document.getElementById('description');
var HistoryDiv = document.getElementById('history_list')
var err_msg = document.getElementById("err_msg");

var input_desc_val;
var input_amt_val;

function addTransaction()
{
    input_desc_val = input_desc.value;
    input_amt_val = input_amt.value;
    console.log(input_desc_val,input_amt_val)

    if(input_desc_val != "" && input_amt_val != "")
    {
        // alert(input_desc_val + " " + input_amt_val);
// 
        err_msg.innerText = "";

        if(input_amt_val > 0)
        {
            //income
            var calc_balance_amt = parseInt(my_balance_amt.innerText) + parseInt(input_amt_val);
            my_balance_amt.innerText = calc_balance_amt;
            var calc_income_amt = parseInt(income_amt.innerText) + parseInt(input_amt_val);
            income_amt.innerText = calc_income_amt;
            //history
            showHistory(input_desc_val, input_amt_val, "income");
        }
        else
        {
            //expense
            var calc_balance_amt = parseInt(my_balance_amt.innerText) + parseInt(input_amt_val);
            my_balance_amt.innerText = calc_balance_amt;
            var calc_expense_amt = parseInt(expense_amt.innerText) - parseInt(input_amt_val);
            expense_amt.innerText = calc_expense_amt;
        }
    }
    else
    {
        // alert("Please Complete the above fields !!");
        err_msg.innerText = "Please Complete the above fields !!";
        err_msg.style.color = "red";
        err_msg.style.fontSize = "16px";
    }
}


function showHistory(description, amount) { 
  const  histoirylist =document.createElement("li");
    histoirylist.innerText = `${description}  ${amount}`;
    HistoryDiv.appendChild(histoirylist).style.listStyle="none";  
}