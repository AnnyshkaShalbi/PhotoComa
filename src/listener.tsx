const listener = {
  "finish": function () {
    this.Static.aboutItems = document.querySelectorAll(".about-item");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        item.target.classList.toggle("show", item.isIntersecting)
      })
    })

    this.Static.aboutItems.forEach(item => {
      observer.observe(item)
    })

  }
}

export { listener }