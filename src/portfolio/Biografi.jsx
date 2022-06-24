import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Biografi = () => {
    return ( 
        <div>
            <div id="biografi" className="row-1">
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h2 className="fw-light">Halo!</h2>
                        <h1 className="fw-light">Saya Muhammad Hafizh</h1>
                        <p className="lead text-muted">Saat ini saya sedang mengikuti kelas MERN untuk penyaluran kerja. Saya suka mempelajari hal-hal baru dan sangat tertarik di dunia pemrograman karena di situ saya dapat meningkatkan kemampuan logika dan problem solving. Dimulai dengan mempelajari web, saya ingin menjadi Software Engineer yang dapat menyelesaikan berbagai permasalahan bisnis di masa yang akan datang.</p>
                        <p className="button">
                        <a href="#kontak" className="btn btn-primary my-2 rounded-pill">Kontak Saya</a>
                        </p>
                    </div>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Biografi;