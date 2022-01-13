const url = "http://127.0.0.1:8000";

function getAssets() {
  return fetch(`${url}/coin`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
};
