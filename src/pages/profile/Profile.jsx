import React, {useContext, useEffect, useState} from 'react';
import Loader from "../home/components/news/Component/Loader";
import Error from "../home/components/news/Component/Error";
import {Container, Row, Col, Badge} from 'react-bootstrap';
import ProfileSlider from "./components/ProfileSlider";
import {Endpoint} from "../../Endpoint";
import UserContext from '../../authControl/UserContext';
import { cleanup } from '@testing-library/react';
import GeoAlt from "../../icon/GeoALt";

export function Profile() {
    // const [user, setUser] = useState([]);
    const {user, setUser} = useContext(UserContext);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [token, setToken ] = useState(localStorage.getItem('token'));

    // useEffect(() => {
    //     fetch(Endpoint.checkMeRoute(), {
    //         method: 'GET',
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(
    //             (res) => {
    //                 setUser(res);
    //                 setIsLoaded(true);
    //             },
    //             (error) => {
    //                 setError(error);
    //             }
    //         );
    // },[]);

    useEffect(() => {
        if(user.id > 0) {
            setIsLoaded(true)
        }
    }, [user])


    return (
        <div>
            {!isLoaded &&
                <Loader />
            }
            {error !== null &&
                <Error message={JSON.stringify(error)} />
            }
            {user &&
                <Container className={'bg-light'}>
                    <Row className={'justify-content-md-center mb-5'}>
                        <Col md={'auto'}>
                            <h4>Твой личный профиль!</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className={'p-2'}>
                            <div className={'md-auto'}>
                                <ProfileSlider />
                            </div>
                        </Col>
                        <Col className={'p-3'}>
                            <Row>
                                <Col className={'h5'}>
                                    {user.name}
                                </Col>
                                <Col className={'h5'}>
                                    {user.surname}
                                </Col>
                                <Col className={'h5'}>
                                    {user.age}
                                </Col>
                            </Row>
                            <hr className={"w-75"} />
                            <Row>
                                <Col className={'text-muted'}>
                                    <GeoAlt /> <small className={'text-dark'}>Место работы</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-muted'}>
                                    <small>{user.workAddress}</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-muted'}>
                                    <GeoAlt /> <small className={'text-dark'}>Город проживания</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'text-muted'}>
                                    <small>{user.cityLiving}</small>
                                </Col>
                            </Row>
                            <Row className={'my-2'}>
                                <Col>
                                    <p style={{whiteSpace: "pre-line"}}>
                                        {user.Description}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <Col>
                                        Интересы
                                    </Col>
                                </Row>
                                <Row className={'bg-light justify-content-start mx-2 p-2'}>
                                    {/*{*/}
                                    {/*    // eslint-disable-next-line array-callback-return*/}
                                    {/*    user.interests.map((item) => {*/}
                                    {/*        <Col sm={'auto'}>*/}
                                    {/*            <Badge pill bg="secondary"  className={'py-1 px-3'}>*/}
                                    {/*                {item.name}*/}
                                    {/*            </Badge>*/}
                                    {/*        </Col>*/}
                                    {/*    })*/}
                                    {/*}*/}
                                </Row>
                            </Row>
                            <Row>
                                <Col>
                                    User tag: <span className={'text-muted'}>@{user.username}</span>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            }
        </div>
    );
}

export default Profile;