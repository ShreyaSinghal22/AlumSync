export default function Response() {
    return (
        <section className="response">
            <div className="res-center">
                <span className="eyebrow">What people Say</span>
                <h2 className="res-t">Loved by alumni & students</h2>
                <p className="res-d">Real stories from people who've used AlumSync to unlock new opportunities.</p>
            </div>
            <div className="res-grid">
                <div className="tcard">
                    <div className="tstars">★★★★★</div>
                    <p className= "ttext">"AlumSync helped me reconnect with my college friends and I got referred to my dream company within a week of joining."</p>
                    <div className="tauthor">
                        <span className="pic1">RK</span>
                        <div className="tdetail">
                        <div className="tname">Rahul Kapoor</div>
                        <div className="trole">
                            Software Engineer, 2019 Batch
                        </div>
                        </div>
                    </div>
                </div>
                <div className="tcard"><div className="tstars">★★★★★</div>
                    <p className= "ttext">"As an admin, the dasboard gives us a bird's-eye view of engagement. It's transformed how we run alumni relations"</p>
                    <div className="tauthor">
                        <span className="pic2">PS</span>
                        <div className="tdetail">
                        <div className="tname">Priya Sharma</div>
                        <div className="trole">
                            ALumni Relations Officer
                        </div>
                        </div>
                    </div>
                </div>
                <div className="tcard"><div className="tstars">★★★★☆</div>
                    <p className= "ttext">"The mentorship portal matched me with the perfect alumnus for my startup journey. Incredibly well designed experience."</p>
                    <div className="tauthor">
                        <span className="pic3">AM</span>
                        <div className="tdetail">
                        <div className="tname">Aditya Mehra</div>
                        <div className="trole">
                            Final Year Student,CSE
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    );
}