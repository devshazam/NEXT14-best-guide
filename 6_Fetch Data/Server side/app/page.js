//  on server side we can fetch data directly

export default async function Page() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  console.log(data);

  return (
    <div>
      {products?.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

