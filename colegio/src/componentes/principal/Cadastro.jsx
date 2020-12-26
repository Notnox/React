import { Component } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import { Grid, TextField, Button } from '@material-ui/core';

const today = new Date();

const ALUNO_INICIAL = {
    nome: '',
    DdN: today,
    idade: '',
    ra: ''
}

const ALUNO_SCHEMA = yup.object().shape({
    nome: yup.string().required('Informe o nome do aluno'),
    DdN: yup.date().max(today).required('Data informada é maior que a data atual'),
})

salvarAluno = (aluno, actions) => {
    this.props.salvar(aluno)
    actions.resetForm()
}

class Cadastro extends Component {
    Change = (name, value, setFieldValue) => {
        setFieldValue(name, value)
    }

    render() {
        return (
            <Formik 
                enableReinitialize
                validationSchema={ALUNO_SCHEMA}
                validateOnMount={true}
                initialValues={this.props.aluno || ALUNO_INICIAL}
                onSubmit={(values, actions) => this.salvarAluno(values, actions)}
                render = {({values, errors, touched, setFieldTouched, setFieldValue}) => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    size='small'
                                    name='nome'
                                    label='Nome'
                                    value={values.nome}
                                    variant='outlined'
                                    onFocus={() => setFieldTouched('nome')}
                                    onChange={e => this.Change('nome', e.target.value, setFieldValue )}
                                    error={touched.nome && errors.nome}
                                    helperText={touched.nome && errors.nome}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    size='small'
                                    name='DdN'
                                    label='Data de nascimento'
                                    value={values.DdN}
                                    variant='outlined'
                                    onFocus={() => setFieldTouched('DdN')}
                                    onChange={e => this.Change('DdN', e.target.value, setFieldValue )}
                                    error={touched.DdN && errors.DdN}
                                    helperText={touched.DdN && errors.DdN}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Grid container spacing={2} justify='flex-end'>
                                    <Grid item>
                                        <Button variant='contained'/>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='contained' color='primary' type='submit'>Salvar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            />
        )
    } 
}

export default Cadastro;