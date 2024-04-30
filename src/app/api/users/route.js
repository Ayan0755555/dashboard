export async function GET(req, res, next) {
  let users = [
    {
      id: 1,
      name: "ayan",
      email: "ayan05@gmail.com",
    },
    {
      id: 2,
      name: "aan",
      email: "ayan04@gmail.com",
    },
  ];

  let data = JSON.stringify(users);

  return new Response(data, { status: 200 });
}
