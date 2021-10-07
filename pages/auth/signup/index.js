import { Formik } from 'formik';
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'

const SignUp = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="sm" component="main" className={classes.container}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Crie sua conta
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="textPrimary">
          E anuncie para todo o S. Tomé
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box className={classes.box}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('ok, form pronto para ser enviado', values)
            }}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                      <InputLabel>Nome</InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                      <InputLabel>Senha</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.password && touched.password ? errors.password : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} className={classes.formControl}>
                      <InputLabel className={classes.inputLabel}>Confirmação de senha</InputLabel>
                      <Input
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                      </FormHelperText>
                    </FormControl>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Cadastrar
                    </Button>
                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default SignUp