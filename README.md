# Proyecto Integrador: Formulario de Inicio de Sesión
**Estudiante:** Daniela Díaz Caro  
**Asignatura:** Electiva Profesional en Ingeniería de Software - CECAR

## Estrategia de Ramificación Seleccionada: GitHub Flow

Para este proyecto se seleccionó la estrategia **GitHub Flow** debido a las siguientes razones técnicas:
1. **Simplicidad y Despliegue Continuo:** Es la estrategia ideal para aplicaciones web de tamaño pequeño o mediano donde la rama `main` se mantiene siempre en un estado estable y desplegable en producción.
2. **Promoción de Revisiones de Código:** Obliga a desarrollar cada nueva funcionalidad en una rama corta (`feature/*`) que debe integrarse a `main` únicamente a través de un Pull Request revisado y aprobado por otro integrante del equipo.
3. **Integración con CI/CD:** Facilita la automatización de pruebas con GitHub Actions en cada Pull Request antes de realizar la fusión.
