import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#919382",
    '& a': {
      color: "#ffffff",
      fontSize: '1.5rem',
      marginLeft: 10,
    },
  },
  brand: {
    color: "#ffffff",
    fontWeight: 'bold',
    fontSize: '2.5rem',
    padding: 20,
  },
  grow:{
    flexGrow: 1,
  },
  main: { mainHieght: "80vh" },

  section:{
    marginTop: 10,
    marginBottom:10,
  },
  form:{
    maxWidth: 800,
    margin:'0 auto', 
  }
});

export default useStyles;
