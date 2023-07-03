// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Bắt đầu
                    <br />
                    Khám phá nào
                  </>
                }
                description="Tất cả các thành phần mà bạn cần trong quá trình phát triển đã được tôi thiết kế lại với giao diện mới."
              />
              <RotatingCardBack
                image={bgBack}
                title="Đi nào !"
                description="Bạn sẽ tiết kiệm được rất nhiều thời gian từ tạo nguyên mẫu đến mã đầy đủ chức năng vì tất cả các yếu tố đều được triển khai."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Bắt đầu với Header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Tài liệu đầy đủ"
                  description="Được xây dựng bởi các nhà phát triển có chuyên môn cao. Bạn sẽ tìm thấy
                    mọi thứ bên trong tài liệu của chúng tôi."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Mẫu đa dạng"
                  description="Các mẫu thiết kế phổ biến nhất thế giới để xây dựng giao diện người dùng."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Tiết kiệm thời gian, tiền bạc"
                  description="Tạo thiết kế của bạn từ đầu với các nhà thiết kế chuyên dụng có thể rất tốn kém. Hãy đầu với thiết kế của tôi sẽ giúp bạn tiết kiệm được thời gian và tiền bạc."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Đáp ứng đầy đủ"
                  description="Bất kể kích thước màn hình, nội dung trang web sẽ tự nhiên phù hợp với độ phân giải nhất định."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
