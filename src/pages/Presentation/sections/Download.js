// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Bạn có yêu thích website
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Ui Frontend này không ?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Trang web UI FRONTEND được tôi xây dựng bằng thư viện React Js, Material Design,
              Styled Components...Hãy góp ý cho tôi cảm nhận của bạn khi xem trang web của tôi
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              target="_blank"
              href="http://blogfrontend.byethost22.com/lien-he/"
              sx={{ mb: 2 }}
            >
              Gửi Góp Ý
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Các Ngôn Ngữ Lập Trình Và Thư Viện Mà Tôi Biết
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="HTML">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="CSS">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
                      height="60px"
                      width="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Javascript">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="React Js">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Sass">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Styled-Components">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://www.datocms-assets.com/98660/1682170857-styled-components.png"
                      width="100px"
                      height="100px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Tailwind CSS">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="MongoDB">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                      width="80px"
                      height="80px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="FireBase">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Node Js">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="GitHub">
                  <MKBox
                    component="div"
                    height="80px"
                    width="80px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <MKBox
                      component="img"
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;
