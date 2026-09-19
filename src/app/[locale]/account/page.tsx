import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { AssetImage } from '@/components/media/AssetImage';
import { AccountPanel } from '@/components/account/AccountPanel';

export const metadata: Metadata = {
  title: 'Tài khoản',
  description: 'Ví vé, lịch của tôi và danh sách yêu thích — kiến trúc tài khoản người tham dự.',
};

export default function AccountPage() {
  return (
    <>
      <PageHero
        kicker="Người tham dự"
        title="Tài khoản của bạn"
        lead="Ví vé, lịch cá nhân và danh sách yêu thích. Giai đoạn này mọi thứ lưu ngay trên máy bạn — chưa có tài khoản máy chủ, chưa có dữ liệu nào được gửi đi."
        assetId="kit-01-18-app-phone-blank"
        env="night"
        height="short"
      />

      <section data-env-zone="night" className="section relative overflow-hidden" style={{ background: '#050507' }}>
        <AssetImage id="kit-01-28-bg-bokeh" sizes="full" fill className="opacity-25" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #050507, rgb(5 5 7 / 0.78) 45%, #050507)' }}
        />
        <div className="wrap relative">
          <AccountPanel />
        </div>
      </section>
    </>
  );
}
