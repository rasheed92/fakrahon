function team12(n) 
{ 
    if (n == 1) 
        return 1; 
    else
        return (team12(n - 1, 2) +  
                    2 - 1) % n + 1; 
} 


console.log(team12(3875))