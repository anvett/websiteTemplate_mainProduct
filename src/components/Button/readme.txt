Documentación del Componente Button
----------------------------------------------------------------------------------


Descripción
----------------------------------------------------------------------------------

El componente Button es un botón personalizable utilizado en varios componentes del proyecto, como en TextoImagen para expandir o contraer texto.


Propiedades
----------------------------------------------------------------------------------

text: String. El texto que se mostrará en el botón.
onClick: Function. La función que se ejecutará cuando se haga clic en el botón.
variant: String (opcional). Define el estilo del botón (por ejemplo, "primary", "secondary").
Estilos Personalizables
El botón admite varios estilos predefinidos que se pueden aplicar mediante la propiedad variant. Además, se pueden agregar estilos personalizados.


Uso
-----------------------------------------------------------------------------------

<Button
  text="Mostrar Más"
  onClick={miFuncion}
  variant="primary"
  className={styles.estilopersonalizado}
/>