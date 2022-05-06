import React, { useEffect } from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import styles from './styles.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/homePage'
import { useNavigate, useParams } from 'react-router-dom'
import FormData from './formData/formData'
import OrderInfo from './orderInfo/orderInfo'
import Gallery from './gallery/gallery'
const Home = ({
    dispatch,
    data,
    phone,
    qty,
    desc,
    isDelivery,
    isLoading,
    isLoadingSubmit,
}) => {
    const navigate = useNavigate()
    let { itemID } = useParams()
    useEffect(() => {
        if (!data) {
            dispatch(actions.getData({ itemID })).then((data) => {})
        }
    }, [itemID, navigate, data, dispatch])
    const handleInputChange = ({ id, value }) => {
        dispatch(actions.handleInputChange({ id, value }))
    }
    const submit = () => {
        dispatch(actions.submitForm({ itemID }))
            .then(() => {
                navigate(`/successfully-submitted`, { replace: true })
            })
            .catch((error) => {
                // if (error === 'you are so far from the shop') {
                //     navigate(`/?DOToken=${doToken}`)
                // }
            })
    }
    return (
        <Row className={'py-4 d-flex justify-content-center'}>
            <Col xs={'12'} md={'12'}>
                <OrderInfo
                    price={data?.item?.Price}
                    desc={data?.item?.Describtion}
                />
            </Col>
            <Col xs={'12'} md={'12'} className={'mb-4'}>
                {/* <h3 style={{ color: 'white' }}>صور المنتج:</h3> */}
                {data?.gallery?.length ? (
                    <div className={styles.galleryWrapper}>
                        <Gallery images={data?.gallery} />
                    </div>
                ) : (
                    ''
                )}
            </Col>
            <Col xs={'12'} md={'12'}>
                <div style={{ position: 'relative' }}>
                    {isLoadingSubmit && (
                        <div className={styles.loader}>
                            <Spinner variant="dark" animation="border" />
                        </div>
                    )}
                    <FormData
                        phone={phone}
                        desc={desc}
                        qty={qty}
                        isDelivery={isDelivery}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className="d-grid gap-2">
                    <Button
                        onClick={submit}
                        disabled={phone === '' || qty === ''}
                        variant="warning"
                        size="lg"
                    >
                        ارسال
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default connect(({ home_page_reducer }) => {
    return {
        isLoading: home_page_reducer.isLoading,
        isLoadingSubmit: home_page_reducer.isLoadingSubmit,
        data: home_page_reducer.data,
        phone: home_page_reducer.phone,
        qty: home_page_reducer.qty,
        desc: home_page_reducer.desc,
        isDelivery: home_page_reducer.isDelivery,
    }
})(Home)
