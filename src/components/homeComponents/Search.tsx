import { SearchOutlined } from "@mui/icons-material";



interface Props {
  setState?:(value:string)=>void
}

const Search = ({}:Props) => {
  return (
    <div style={{ position: "relative",width:"20rem" }}>
      <input className="record-search" placeholder="Search"  />
      <SearchOutlined
        className="search"
        sx={{
          fontSize: "1.7rem",
          position: "absolute",
          right: "5%",
          top: "10px",
          color: "#0047AB",
        }}
      />
    </div>
  );
}

export default Search