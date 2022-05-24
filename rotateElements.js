function runProgram(input) {
    input = input.trim().split("\n"); 
    let N = +input[0];
    let matrix = [];
    let line = 1;
    for(let i=0; i<N; i++) {
        let arr = input[line++].trim().split(" ").map(Number); 
        matrix.push(arr);
    }
    let R = N;
    let C = N;
    RotateElements(R,C,matrix);
    }
    
    
    
    
    
    function RotateElements(m,n,mat) {
    
    // let ring = n/2;
    // let top = 0;
    // let bottom = n-1;
    // let left = 0;
    // let right = n-1;
    // let count = 0;
    
    
    // while(count<=ring) {
    
    //   matrix[top][left] = demo[bottom][left];
    //   matrix[top][right] =  demo[top][left] ;
    //   matrix[bottom][right] = demo[top][right];
    //   matrix[bottom][left] = demo[bottom][right];
       
    //   top++;
    //   left++;
    //   bottom--;
    //   right--;
    //   count++;
    // }
    
    // return matrix;
       
    // }
    
    
    // A function to rotate a matrix
    // mat[][] of size R x C.
    // Initially,
    
        let row = 0, col = 0;
        let prev, curr;
        
        /*
        row - Starting row index
        m - ending row index
        col - starting column index
        n - ending column index
        i - iterator
        */
        while (row < m && col < n)
        {
            if (row + 1 == m || col + 1 == n)
                break;
    
            // Store the first element of next
            // row, this element will replace
            // first element of current row
            prev = mat[row + 1][col];
    
            // Move elements of first row
            // from the remaining rows
            for(let i = col; i < n; i++)
            {
                curr = mat[row][i];
                mat[row][i] = prev;
                prev = curr;
            }
            row++;
    
            // Move elements of last column
            // from the remaining columns
            for(let i = row; i < m; i++)
            {
                curr = mat[i][n - 1];
                mat[i][n - 1] = prev;
                prev = curr;
            }
            n--;
    
            // Move elements of last row
            // from the remaining rows
            if (row < m)
            {
                for(let i = n - 1; i >= col; i--)
                {
                    curr = mat[m - 1][i];
                    mat[m - 1][i] = prev;
                    prev = curr;
                }
            }
            m--;
    
            // Move elements of first column
            // from the remaining rows
            if (col < n)
            {
                for(let i = m - 1; i >= row; i--)
                {
                    curr = mat[i][col];
                    mat[i][col] = prev;
                    prev = curr;
                }
            }
            col++;
        }
    
        // Print rotated matrix
        for(let i = 0; i < mat.length; i++)
        {
            let out = "";
            for(let j = 0; j < mat.length; j++) {
               out+= mat[i][j] + " "; 
            }
            console.log(out);
        }
    
    }
    
    
    
    
    
    
    
    if (process.env.USER === "") {
      runProgram(``);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }
    
    
    
    
    
    
    
    
    
    
    