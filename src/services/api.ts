export const fetchRandomProfilePic = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const profilePic = data.results[0].picture.thumbnail;
  return profilePic;
};