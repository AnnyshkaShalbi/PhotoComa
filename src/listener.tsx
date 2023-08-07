const listener = {
  "finish": function () {
    this.Static.aboutItems = document.querySelectorAll(".about-item");



    const observer = new IntersectionObserver(entries => {

      entries.forEach(item => {
        item.target.classList.toggle("show", item.isIntersecting)
      })
      console.log('=b1055d=', entries)
    })

    this.Static.aboutItems.forEach(item => {

      observer.observe(item)
    })

    // this.Static.vacancy.forEach(item => {
    //     observer.observe(item)
    // })

    // observer.observe(this.Static.Ref.jdem)


  }
}

export { listener }