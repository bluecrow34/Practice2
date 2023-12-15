const input = $('#search');
const imageArea = $('#imageBody');


function addGif(res){
    let numResults = res.data.length;
    if(numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let newCol= $("<div>", {class: "imageDisplay"});
        let newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        newCol.append(newGif);
        imageArea.append(newCol);
    }
}

/*/form submission*/

$("form").on("submit", async function(e){
    e.preventDefault();

    let inputValue = input.val();
    input.val("");

    const response = await axios.get(" http://api.giphy.com/v1/gifs/search", {
        params: {
            q: inputValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

/*Remove image*/
$("#remove").on("click", function() {
    form.empty();
  });
