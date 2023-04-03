import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";
import Advert from "./Advert";

export default function Index() {

  const [data, setData] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios
      .post("http://localhost:3333/", {
        page_number: 1,
        number_of_advert: 20,
        advert_order_menu_id: 3,
        mapData: null,
        cityRequest: null,
        advertListDetailData: {},
        property_type_ids: null,
      })
      .then(function (response) {
        setData(response.data.advertListDatas)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <>
      <div className="p-3 mb-5">
        <Row>
          {data?.map((item, i) => {
            return (
              <Col key={i} xs={12} sm={12} md={6} lg={4} xl={3}>
                <Advert data={item} />
              </Col>
            )
          })}
        </Row>

      </div>
    </>
  );
}
