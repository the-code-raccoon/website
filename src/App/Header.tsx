import { animateScroll as scroll, scroller } from "react-scroll";

export default function Header(props: any) {
  const { toggleThemeMode } = props;

  return (
    <header className="fixed flex flex-row text-white">
      <div
        className="text-8xl font-bold text-orange-500 hover:cursor-pointer dark:text-white"
        onClick={() => scroll.scrollToTop()}
      >
        F. Ho
      </div>
      <div>
        <div className="flex flex-row">
          <div>one</div>
          <div>one</div>
          <div>one</div>
          <div>one</div>
        </div>
      </div>
      <button
        className="border border-black bg-white p-3 text-black"
        onClick={() => {
          const html = document.querySelector("html")!;
          html.classList.contains("dark")
            ? html.classList.remove("dark")
            : html.classList.add("dark");
        }}
      >
        Click
      </button>
    </header>
  );
  // return (
  //   <Navbar expand="sm" fixed="top">
  //     <Container fluid>
  //       <Nav.Link onClick={() => scroll.scrollToTop()}>
  //         <Brand>F. Ho</Brand>
  //       </Nav.Link>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="ms-auto align-items-center">
  //           <Toggle className="me-auto" toggleThemeMode={toggleThemeMode} />
  //           <Nav.Link
  //             onClick={() => {
  //               scroller.scrollTo("featured-works", {
  //                 duration: 800,
  //                 delay: 0,
  //                 smooth: "easeInOutQuart",
  //                 offset: -150,
  //               });
  //             }}
  //           >
  //             <Text>Work</Text>
  //           </Nav.Link>
  //           <Nav.Link
  //             onClick={() => {
  //               scroller.scrollTo("about", {
  //                 duration: 800,
  //                 delay: 0,
  //                 smooth: "easeInOutQuart",
  //                 offset: -150,
  //               });
  //             }}
  //           >
  //             <Text>About</Text>
  //           </Nav.Link>
  //           <Nav.Link onClick={() => {
  //               scroller.scrollTo("contact", {
  //                 duration: 800,
  //                 delay: 0,
  //                 smooth: "easeInOutQuart",
  //                 offset: -150,
  //               });
  //             }}>
  //             <Text>Contact</Text>
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
}
