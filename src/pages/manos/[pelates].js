const Id = (props) => {
  const { id, stam } = props;
  console.log("stam :>> ", stam);
  return (
    <h1>
      {id}-{stam}
    </h1>
  );
};
export default Id;

// This gets called on every request
export async function getServerSideProps({ params }) {
  console.log("params :>> ", params);
  // Pass data to the page via props

  // make a db call and get all related data with the customer id = params.pelates

  return { props: { id: params.pelates, stam: "xaxa" } };
}
