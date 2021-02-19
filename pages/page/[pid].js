function Page({ data }) {
  if (!data) return <div>loading...</div>
  return <h1>{data.title}</h1>
}

// This gets called on every request
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  // const res = await fetch(`https://fws-public.cancerresearchuk.org/v1/page/${params.pid}`)
  // const data = await res.json()

  // Pass data to the page via props
  return { props: { data: {title: "test"} } }
}

export default Page