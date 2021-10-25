//없는 url 입력 시 오류 페이지
import { Helmet } from "react-helmet";

export default function Error() {
  return (
    <div>
      <Helmet>
        <title>fanCake | 오류</title>
      </Helmet>
      hello from error page
      <br />
      hi
      <br />
      hi
      <br />
      hi
      <br />
      hi
      <br />
      hi
      <br />
      This is an error page
      <br />
      Page not found 404
    </div>
  );
}
