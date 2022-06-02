function generateALlSubstr(N,A){

    for(let i=0; i<N; i++) {
        for(let j=i+1; j<=N; j++) {
            let SubStr = "";
            for(let k=i; k<j; k++) {
                SubStr+= A[k];
            }
            console.log(SubStr);
        }
    }
    }
    