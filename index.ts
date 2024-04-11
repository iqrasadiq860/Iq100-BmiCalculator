#!/usr/bin/env node
import inquirer from 'inquirer'
console.log('======bmi calculator for adults======');

const answer=await inquirer.prompt([
    {
        type:'number',
        name:'weightInKg',
        message:'enter your weight in kg'
    },
    {
        type:'number',
        name:'heightInMeter',
        message:'enter your height in meter '
    },
])


let bmi= ((answer.weightInKg )/ (answer.heightInMeter*answer.heightInMeter))
console.log(`your BMI is ${bmi}`);


if(bmi<18.5){
    console.log(`your bmi is ${bmi},you are very underweight`); 
}else if(bmi>24.9){
    console.log(`your bmi is ${bmi},'NORMAL' you have a healthy weight`);   
}else if(bmi>29.9){
    console.log(`your bmi is ${bmi}, you are overweight`);
}else if(bmi>>30){
    console.log(`your bmi is${bmi}, you are obese`);  
}else{
    console.log('dont mind but you are hudely obese');
    
}
