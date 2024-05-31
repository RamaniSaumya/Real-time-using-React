function RealTime() {
  var currdate = new Date();
  let date=currdate.getDate();
  var month=currdate.getMonth()+1
  var year=currdate.getFullYear()
  let hrs=currdate.getHours();
  let min=currdate.getMinutes();
  let sec=currdate.getSeconds();

  return(
    <p className="real">Today's date is <b>{date}-{month}-{year}</b> and the current time is <b>{hrs} : {min} : {sec}</b></p>
  )

}

export default RealTime;
