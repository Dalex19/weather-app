const headerSearchBarOptions = {
    placeholder: "Search for cities...",
    onSearch: (query : any) => console.log(`Search query: ${query}`),
    onCancel: () => console.log("Search cancelled"),
    onSubmit: (query : any) => console.log(`Search submitted: ${query}`),
    onChangeText: (e : any) => console.log(e.nativeEvent.text)
  };
  
  export default headerSearchBarOptions;
  