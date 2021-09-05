//load
let fs = require("fs")
let http = require("http")
let url = require("url");
let { addTask, getAllTask, deleteTask } = require("./taskService");




//create server 
let server = http.createServer((request, response) => {
    let urlInfo = url.parse(request.url, true);

    console.log("path", urlInfo.path); //path: path name with query details 

    console.log("pathName", urlInfo.pathname); //pathname :only path


    if (urlInfo.path != "/favicon.ico") {

        if (urlInfo.pathname == "/addTask") {
            console.log("query", urlInfo.query);

            let task = urlInfo.query;
            console.log("emp : ", task.empId);
            console.log("taskid : ", task.taskId);
            console.log("task : ", task.task);
            console.log("deadline : ", task.deadline);

            const success = addTask(task);
            if (success) {
                response.writeHead(302, { 'Location': '/' });
            } else {
                response.write("Task id must be Unique")

            }
            //    console.log("all task ", getAllTask())


        } else if (urlInfo.pathname == "/deleteTask") {
            let task = urlInfo.query;
            const success = deleteTask(task.taskId);

            if (success) {
                response.writeHead(302, { 'Location': '/' });
            } else {
                response.writeHeader(500, { "Content-Type": "text/html" });

                response.write(`Task with Id: ${task.taskId} does not exist`)

                
            }



        } else if (urlInfo.pathname == "/getAllTask") {
            const tasks = getAllTask();
            response.writeHeader(200, { "Content-Type": "application/json" });
            response.write(JSON.stringify(tasks));

        } else if (urlInfo.pathname == "/index.js") {

            const html = fs.readFileSync("index.js")

            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);

        }
        else {

            const html = fs.readFileSync("index.html")

            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);


        }
    }

    //end at last 
    response.end()

})

server.listen(9090, () => console.log("server is running on port number 9090"));

//run program using command as noce simpleServer.js
//then open the browser and hit url as 
// http://localhost:9090


