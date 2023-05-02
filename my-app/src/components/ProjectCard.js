import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,src }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt=''/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="proj-link" href={src} target='_blank'>{src}</a>
        </div>
      </div>
    </Col>
  )
}