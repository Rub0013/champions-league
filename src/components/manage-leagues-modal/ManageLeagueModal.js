import React from 'react';
import { Icon, Form, Input, Modal } from 'antd';
import PropTypes from 'prop-types';

function ManageLeagueModal(props) {
    const handleFormSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.manageLeague(values);
            }
        });
    };

    const { getFieldDecorator } = props.form;

    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={e => handleFormSubmit(e)}
            onCancel={() => props.closeModal()}
            destroyOnClose={true}
        >
            <Form onSubmit={handleFormSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please enter the name of the league!' }]
                    })(
                        <Input
                            type="text"
                            prefix={<Icon type="trophy" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Name of the league"
                        />
                    )}
                </Form.Item>
            </Form>
        </Modal>
    );
}

ManageLeagueModal.propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    closeModal: PropTypes.func,
    manageLeague: PropTypes.func,
    form: PropTypes.shape({
        getFieldDecorator: PropTypes.func,
        validateFields: PropTypes.func
    })
};

export default Form.create()(ManageLeagueModal);
