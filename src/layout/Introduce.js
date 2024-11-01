import React from 'react';

function Introduce() {
    return (
        <div className="flex flex-col items-center-500 py-8 px-4">
            <div className="flex flex-col md:flex-row items-center md:justify-center w-full max-w-4xl mx-auto">
                <img
                    src="https://mtvn.a2t.vn/static/img/bg-overview-1.0e567c18377d.png"
                    alt="Main Banner"
                    className="w-64 md:w-64 h-auto rounded-lg mb-4 md:mb-0"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-6">
                    <h2 className="text-lg font-bold text-blue-500 mb-4">
                        MUÔN VÀN KIỂU CHÚC TẾT ĐẾN TỪ VỊ TRÍ GEN Z
                    </h2>
                    <p className="text-base">
                        Một mùa Tết nữa lại sắp đến, Tết đến là dịp gia đình vui vầy sum họp, trao cho nhau nụ cười và những lời chúc tụng, mừng tuổi để bày tỏ lòng hiếu thảo, tình thương yêu của mọi người trong gia đình. “Mang Tết về nhà” xin mách bạn một số câu chúc vui nhộn bỏ túi ngay để nhận lì xì liền tay.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
