const http=require('http'); const fs=require('fs');


let cache={};


const server=http.createServer((req,res)=>{
if(req.url==='/'){
try{ const body=fs.readFileSync('./missing.html','utf8'); // ISSUE: wrong filename, will crash
res.writeHead(200,{ 'Content-Type':'text/html'}); res.end(body); }catch(e){ res.writeHead(500); res.end('fail'); }
} else if(req.url.startsWith('/echo')){
const msg=(req.url.split('?')[1]||'').replace('msg=','');
res.writeHead(200,{ 'Content-Type':'text/plain'});
res.end('You said: ' + (msg.toUpperCase? msg.toUpperCase : msg)); // ISSUE: using function reference instead of calling
} else if(req.url.startsWith('/memo')){
const key=Date.now().toString();
cache= {}; cache[key]=req.url; // ISSUE: resets cache every time
res.writeHead(201);
res.end(); // ISSUE: forgets to return key
} else {
res.writeHead(404); res.end(); // ISSUE: empty response body
}
});


server.listen(8080,()=>{console.log('Server started')});
