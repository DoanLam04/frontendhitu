import React from 'react';

function ThongTin() {
    return (
        <div>
            <div className='flex flex-col justify-center pt-32'>
                <div>
                    <h1 className='text-3xl text-blue-500 font-bold text-center md:text-4xl'>THÔNG TIN</h1>
                    <p className='px-6 md:px-20'>Chương trình "Mang Tết về nhà" năm 2024 dành tặng 560 vé máy bay (Hà Nội và Đà Nẵng) và 4.365 vé xe ô tô về các tỉnh miền Trung và miền Bắc (Phú Yên, Bình Định, Quảng Ngãi, Quảng Nam, Đà Nẵng, Thừa Thiên Huế, Quảng Trị, Quảng Bình, Hà Tĩnh, Nghệ An, Thanh Hóa) và các phần quà ý nghĩa cho đối tượng sinh viên, thanh niên công nhân, người lao động xa nhà có hoàn cảnh khó khăn về quê đón Tết Nguyên đán Giáp Thìn 2024.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center py-10 md:py-16'>
                <div>
                    <h1 className='text-3xl text-blue-500 font-bold text-center md:text-4xl'>THỜI GIAN TRIỄN KHAI</h1>
                    <div className='flex flex-col   md:flex-row items-center md:pl-24 '>
                        <img
                            src="https://mtvn.a2t.vn/static/img/bg-information-1.2521bbfcf030.png"
                            alt="thoigian"
                            className="w-96 md:w-48 h-auto md:h-full object-cover"
                        />
                        <div className="p-4 md:pl-16">
                            <h2 className="text-base font-bold mb-2">Chuyến bay:</h2>
                            <ul className="list-disc list-inside mb-4">
                                <li>TP. Hồ Chí Minh - Hà Nội: Ngày 04, 05, 06/02/2024 (Nhằm ngày 25, 26, 27 âm lịch).</li>
                                <li>TP. Hồ Chí Minh - Đà Nẵng: Ngày 04, 05, 06/02/2024 (Nhằm ngày 25, 26, 27 âm lịch).</li>
                            </ul>
                            <h2 className="text-base font-bold mb-2">Chuyến xe về các tỉnh miền Trung và miền Bắc:</h2>
                            <p>
                                Ngày 02, 03, 04, 05, 06/02/2024 (Nhằm ngày 23, 24, 25, 26, 27 âm lịch).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* đối tượng */}
            <div>
                <h1 className='text-3xl text-blue-500 font-bold text-center md:text-4xl'>ĐỐI TƯỢNG</h1>
                <div className="flex flex-col md:flex-row p-4 md:px-48">
                    {/* Image First */}
                    <div className="flex justify-center md:w-1/2 px-5 order-1 md:order-3">
                        <img
                            src="https://mtvn.a2t.vn/static/img/bg-information-2.baaad4de282d.png"
                            alt="Mang Tết Về Nhà"
                            className="w-96 h-96 md:w-68 md:h-68 object-contain"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-2/3 order-1 md:order-2">
                        <p className="mb-4">
                            Sinh viên, thanh niên công nhân có hoàn cảnh khó khăn đang học tập, làm việc tại một số tỉnh, thành phố Nam (tập trung tại TP. Hồ Chí Minh, Đồng Nai, Bình Dương) có quê tại một số tỉnh miền Trung và miền Bắc (Phú Yên, Bình Định, Quảng Ngãi, Quảng Nam, Đà Nẵng, Thừa Thiên Huế, Quảng Trị, Quảng Bình, Hà Tĩnh, Nghệ An, Thanh Hóa).
                        </p>
                        <h2 className="text-blue-600 font-bold text-lg mb-2">ĐIỀU KIỆN ƠƯU TIÊN</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li>Có hoàn cảnh khó khăn; gia đình thuộc diện hộ nghèo, cận nghèo theo quy định (có xác nhận của chính quyền địa phương).</li>
                            <li>Có thành tích trong học tập, lao động (có giấy khen, bằng khen, xác nhận của cơ quan, đơn vị, doanh nghiệp, tổ chức công đoàn).</li>
                            <li>Tích cực tham gia các hoạt động Đoàn, Hội (có giấy xác nhận của tổ chức Đoàn, Hội).</li>
                            <li>03 năm trở lên chưa về quê đón Tết (có giấy xác nhận của địa phương hoặc đoàn doanh nghiệp).</li>
                        </ul>
                        <p className="italic">
                            Ghi chú: Ban tổ chức đánh giá, xem xét các tiêu chuẩn và tiêu chí ưu tiên sau đợt phân bổ phù hợp theo số lượng về và hành trình di chuyển của đối tượng tham gia chương trình.
                        </p>
                    </div>
                </div>
            </div>

            {/* thời gian */}
            <div className='flex flex-col justify-center py-10 md:py-16'>
                <div>
                    <h1 className='text-3xl text-blue-500 font-bold text-center md:text-4xl'>THỜI GIAN TRIỄN KHAI</h1>
                    <div className='flex flex-col items-center md:flex-row md:pl-24'>
                        <img
                            src="https://mtvn.a2t.vn/static/img/bg-information-3.f3b58f995d70.png"
                            alt="thoigian"
                            className="w-96 md:w-48 h-auto md:h-full object-cover"
                        />
                        <div className="p-4 md:pl-16">
                            <ul className="list-disc list-inside mb-4">
                                <li>Phiếu đăng ký tham gia chương trình (theo mẫu của BTC).</li>
                                <li>Hình chụp Căn cước công dân.</li>
                                <li>Hình chụp Giấy xác nhận gia cảnh khó khăn, hộ nghèo, hộ cận nghèo của chính quyền địa phương (nếu có).</li>
                                <li>Hình chụp Bằng chứng nhận hoặc bằng khen liên quan tới thành tích tiêu biểu trong năm 2023 (nếu có).</li>
                                <li>Hình chụp Bằng khen, giấy khen, giấy xác nhận có thành tích xuất sắc trong tham gia phong trào Đoàn, Hội (nếu có).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThongTin;
