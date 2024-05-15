import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/Leonardo_AI_Foto02.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="About me"
        >
            <h3 className={styles.subtitulo}>
                Hello, I'm a Dev!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Eduardo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed semper lacus, vitae malesuada erat. Integer in tempus orci. Vestibulum lobortis leo urna, at cursus massa tristique sit amet. Nunc lacinia erat vel ornare lacinia. Proin vitae commodo dolor. Vestibulum sodales dapibus nulla. Sed finibus leo et gravida tristique.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida fermentum est. Integer ipsum nisi, convallis id porta at, auctor vitae dolor. Sed dapibus purus tortor, mollis ornare dolor maximus vitae. Suspendisse fermentum dolor quis leo placerat, a tempor eros aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla fermentum ligula quam. In rutrum cursus convallis. Curabitur efficitur laoreet bibendum. Etiam nec nibh molestie, vestibulum ex eu, varius mauris. Vestibulum suscipit eget tellus id vehicula. Fusce viverra, lacus at consectetur consectetur, nibh eros tincidunt eros, at tincidunt libero orci id magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae. Morbi tincidunt ornare massa eget egestas purus. Nunc sed augue lacus viverra vitae congue eu consequat. Sagittis purus sit amet volutpat. Pharetra sit amet aliquam id diam maecenas. Placerat in egestas erat imperdiet sed. Lobortis feugiat vivamus at augue. Non enim praesent elementum facilisis. Habitant morbi tristique senectus et netus. Lobortis feugiat vivamus at augue. Porttitor rhoncus dolor purus non enim. Lacus sed viverra tellus in. Semper risus in hendrerit gravida rutrum quisque non. Turpis egestas integer eget aliquet. Volutpat maecenas volutpat blandit aliquam etiam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices vitae. Morbi tincidunt ornare massa eget egestas purus. Nunc sed augue lacus viverra vitae congue eu consequat. Sagittis purus sit amet volutpat. Pharetra sit amet aliquam id diam maecenas. Placerat in egestas erat imperdiet sed. Lobortis feugiat vivamus at augue. Non enim praesent elementum facilisis. Habitant morbi tristique senectus et netus. Lobortis feugiat vivamus at augue. Porttitor rhoncus dolor purus non enim. Lacus sed viverra tellus in. Semper risus in hendrerit gravida rutrum quisque non. Turpis egestas integer eget aliquet. Volutpat maecenas volutpat blandit aliquam etiam.
            </p>

        
        </PostModelo>
    )
}