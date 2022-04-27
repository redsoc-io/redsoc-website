function Member({ name, url }) {
  return (
    <div className="mem">
      <div>
        <img className="memlogo" src={url} height="150" width="150" />
      </div>
      <h3 className="memname">{name}</h3>
    </div>
  );
}
function Mem() {
  return (
    <div className="members">
      <div className="memberdiv">
        <Member url="/team/aiswarya.jpeg" name="AISWARYA P S" />
        <Member url="/team/muhammad.jpg" name="MUHAMMAD R" />
        <Member url="/team/aleena.png" name="ALEENA SHAJI REKHA" />
      </div>
      <div className="memberdiv">
        <Member url="/team/midhunvnadh.jpeg" name="MIDHUN V NADH" />
        <Member url="/team/goutham.jpeg" name="GOUTHAM SURESH" />
        <Member url="/team/bilal.jpg" name="BILAL N" />
      </div>
    </div>
  );
}
export default Mem;
