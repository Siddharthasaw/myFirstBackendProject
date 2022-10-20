function missNumber()
{
    let arr=[1,2,3,5,6,7]
    let n = arr.length;
    let SumOfNumber=((n+1) * (n+2))/2
     let sumOfArray=0
    for(let i=0;i<n;i++)
    {
     sumOfArray=sumOfArray+arr[i]
    }
    
    let missingNumber=SumOfNumber-sumOfArray
    return missingNumber
}


function missedNumber()
{
    let arr=[33,34,35,37,38]
    let n=arr.length;
    let SumOfNumber=((arr[0]+arr[n-1])/2)*(n+1)
     let sumOfArray=0
    for(let i=0;i<n;i++)
    {
     sumOfArray=sumOfArray+arr[i]
    }
    
    let missingNumber=SumOfNumber-sumOfArray
    return missingNumber


}

module.exports=
{
    missNumber,missedNumber
}