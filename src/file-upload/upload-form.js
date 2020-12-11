import Payment from './payment'
      section: 'uppy', // uppy ,qr or payment,
        ) : _this.state.section === 'qr' ? (
          <div className="mb-2">
            <QrCode
              bchAddr={_this.state.bchAddr}
              hostingCostUSD={_this.state.hostingCostUSD}
              hostingCostBCH={_this.state.hostingCostBCH}
              changeSection={_this.changeSection}
              resetValues={_this.resetValues}
              fileId={_this.state.fileId}
            />
          </div>
        ) :
            <Payment
              walletInfo={_this.props.walletInfo}
              bchWallet={_this.props.bchWallet}
              hostingCostUSD={_this.state.hostingCostUSD}
              hostingCostBCH={_this.state.hostingCostBCH}
              bchAddr={_this.state.bchAddr}
              resetValues={_this.resetValues}
              changeSection={_this.changeSection}
              resetValues={_this.resetValues}
            />
        }
      _this.Notification.notify('Upload', 'Success!!', 'success')
      _this.changeSection('payment')
      if (error.message)
        _this.Notification.notify('Upload', error.message, 'danger')
      else _this.Notification.notify('Upload', 'Error', 'danger')
UploadForm.propTypes = {
  walletInfo: PropTypes.object.isRequired,
  bchWallet: PropTypes.object
}