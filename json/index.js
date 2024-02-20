async function get_data() {
  const data = await d3.json("spotify.json");
  console.log(data);
}

get_data();
