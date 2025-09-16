package main


import("fmt";"net/http";"strconv";"time")


var visits int
var client=&http.Client{ Timeout:5*time.Second }


func main(){ http.HandleFunc("/inc",incHandler); http.HandleFunc("/get",getHandler); http.ListenAndServe(":9090",nil) }


func incHandler(w http.ResponseWriter,r *http.Request){ v:=r.URL.Query().Get("n"); if v==""{v="1"}; n,err:=strconv.Atoi(v); if err!=nil{ w.WriteHeader(http.StatusBadRequest); fmt.Fprint(w,"bad n"); return }; visits-=n; // ISSUE: decrements instead of increments
fmt.Fprintf(w,"ok: %d\n",visits) }


func getHandler(w http.ResponseWriter,r *http.Request){ fmt.Fprintf(w,"%d",visits*100) } // ISSUE: wrong scale factor
